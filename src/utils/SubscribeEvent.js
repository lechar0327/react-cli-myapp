// 封装一个发布订阅类,便于跨组件传值

// 发布订阅模式实现
class SubscribeEvent {
    constructor() {
        //存储消息
        this.cacheList = {};
    }

    /**
     * 订阅消息
     * @param {消息类型} type 
     * @param {回调函数} callback 
     */
    subscribe(type, callback) {
        //如果存在此类型的消息,就push
        if (this.cacheList[type]) {
            this.cacheList[type].push(callback);
        }
        else {
            // 无此类消息,直接赋值回调函数
            this.cacheList[type] = [callback];
        }
        return () => {
            this.remove(type, callback);
        };

    }
    //发布消息
    dispatch(type, data) {
        // 发布消息时,如果没有此类型的消息,直接退出

        if (!this.cacheList[type]) {
            return;
        }
        else {
            //循环执行回调函数
            var currentCache = this.cacheList[type];

            currentCache.map((ele, index) => {
                currentCache[index](data);
            });
        }
    }

    //删除消息
    remove(type, callback) {
        if (callback) {
            var currentCache = this.cacheList[type];
            currentCache = currentCache.filter(
                eMap => eMap.callback !== callback
            );
            this.cacheList[type] = currentCache;
        } else {
            this.cacheList[type] = null;
            delete this.cacheList[type];
        }
    }
};

//export default new SubscribeEvent();


class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(type, cb,) {
        let cbs = this.listeners[type];
        if (!cbs) {
            cbs = [];
        }
        cbs.push(cb);
        this.listeners[type] = cbs;
        return () => {
            this.remove(type, cb);
        };
    }

    emit(type, ...args) {
        const cbs = this.listeners[type];
        if (Array.isArray(cbs)) {
            for (let i = 0; i < cbs.length; i++) {
                const cb = cbs[i];
                if (typeof cb === 'function') {
                    cb(...args);
                }
            }
        }
    }

    remove(type, cb) {
        if (cb) {
            let cbs = this.listeners[type];
            cbs = cbs.filter(eMap => eMap.cb !== cb);
            this.listeners[type] = cbs;
        } else {
            this.listeners[type] = null;
            delete this.listeners[type];
        }
    }
}

export default new EventEmitter();
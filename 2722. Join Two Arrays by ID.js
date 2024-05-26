var join = function(arr1, arr2) {
    let map = new Map();
    arr1.forEach(obj => {
        if (!map.has(obj.id)) {
            map.set(obj.id, { ...obj });
        } else {
            Object.assign(map.get(obj.id), obj);
        }
    });
    arr2.forEach(obj => {
        if (!map.has(obj.id)) {
            map.set(obj.id, { ...obj });
        } else {
            Object.assign(map.get(obj.id), obj);
        }
    });
    let result = Array.from(map.values());
    const sortObjectProperties = (obj) => {
        const sortedKeys = Object.keys(obj).sort();
        let sortedObj = {};
        sortedKeys.forEach(key => {
            sortedObj[key] = obj[key];
        });
        return sortedObj;
    };
    result = result.map(sortObjectProperties);
    result.sort((a, b) => a.id - b.id);

    return result;
};

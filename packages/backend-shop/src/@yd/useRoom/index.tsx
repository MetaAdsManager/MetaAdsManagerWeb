/** @format */

export default () => {
    const getPeople = (list) => {
        const res = list.reduce((obj, item) => {
            const { roomNo, userName, idcard, userMobile } = item;
            if (!obj[roomNo]) {
                obj[roomNo] = { i: 0 };
            }
            const { i } = obj[roomNo];
            obj[roomNo].roomNo = roomNo;
            obj[roomNo][`userName${i}`] = userName;
            obj[roomNo][`idcard${i}`] = idcard;
            obj[roomNo][`userMobile${i}`] = userMobile;
            obj[roomNo].i++;
            return obj;
        }, {});
        return Object.values(res) as any[];
    };
    const getColumns = (list) =>
        Array(getPeople(list)[0]?.i)
            .fill(null)
            .reduce(
                (arr, _, j) => {
                    arr.push({ title: '住客姓名', dataIndex: `userName${j}`, align: 'center' });
                    arr.push({
                        title: '住客身份证号',
                        dataIndex: `idcard${j}`,
                        align: 'center'
                    });
                    arr.push({
                        title: '联系电话',
                        dataIndex: `userMobile${j}`,
                        align: 'center'
                    });
                    return arr;
                },
                [{ title: '序号', dataIndex: 'roomNo', align: 'center' }]
            );
    const getWidth = (list) => ({ x: 200 * getPeople(list)[0]?.i * 3 });
    return {
        getPeople,
        getColumns,
        getWidth
    };
};

export default function () {
    function mathRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function checkResult(row) {
        if (+row.inputResult === 0 || row.isClick) return;
        if (+row.inputResult === +row.result) {
            row.buttonText = 'Правильно'
            row.isResult = true;
        } else if (+row.inputResult !== +row.result) {
            row.buttonText = 'Неправильно'
            row.isResult = false;
        }
        row.isClick = true;
        return row;
    }

    function checkPrompt(row) {
        if (row.isResult === true) return;
        if (row.isClick) {
            row.prompt = true;
        } else {
            row.prompt = true;
            row.buttonText = 'Подсказка'
            row.isResult = false;
            row.isClick = true;
        }
        return null;
    }

    function countResults() {
        let l1 = this.results.filter(x => x.isResult === true);
        let l2 = this.results.filter(x => x.isResult === false && x.prompt !== true);
        let l3 = this.results.filter(x => x.prompt === true);
        return {
            'isTrue': l1.length,
            'isFalse': l2.length,
            'isPrompt': l3.length,
        }
    }

    function generateValue(rows, mAction, min, max, genInt) {
        let resultArray = []
        for (let n = 0; n < rows; n++) {
            let t = genInt(min, max);
            let n1 = t.n1;
            let n2 = t.n2;
            let r = t.r;
            resultArray.push({
                num1: n1,
                num2: n2,
                mathAction: mAction,
                result: r,
                isResult: null,
                isClick: false,
                inputResult: '',
                buttonText: 'Решить',
                prompt: false,
            })
        }
        return resultArray;
    }


    return {
        checkResult,
        checkPrompt,
        countResults,
        generateValue,
        mathRandom
    }
}

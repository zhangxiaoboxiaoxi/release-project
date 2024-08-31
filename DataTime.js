/**
 * @fileName utils/DataTime.js
 * @description nav时间模块
 * @auther zhangxiaobo
 * @time 2022年7月1日
 */
class DateTime {
    constructor(time) {
        this.weekday = [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
        ]
        if (time) {
            this.Date = new Date(time)
        } else {
            this.Date = new Date()
        }
        this.year = this.Date.getFullYear()
        this.month = this.Date.getMonth() + 1
        this.date = this.Date.getDate()
        this.day = this.Date.getDay()
        this.hour = this.Date.getHours()
        this.minute = this.Date.getMinutes()

        this.second = this.Date.getSeconds()
        this.month =
            this.month < 10 ? '0' + this.month : (this.month = this.month)

        this.date = this.date < 10 ? '0' + this.date : (this.date = this.date)

        this.minute =
            this.minute < 10 ? '0' + this.minute : (this.minute = this.minute)

        this.second =
            this.second < 10 ? '0' + this.second : (this.second = this.second)
    }
    getDate() {
        return this.year + '-' + this.month + '-' + this.date + ' ' + ' '
    }
    getTime() {
        return this.hour + ':' + this.minute
        // return this.hour + ':' + this.minute + ':' + this.second
    }
    getDay() {
        return this.month + '月' + this.date + '日'
    }
    getWeek() {
        return this.weekday[this.day]
    }
    
}
export { DateTime }

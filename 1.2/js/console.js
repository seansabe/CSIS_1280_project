// Get the date to display on terminal

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
var month = months[date.getMonth()];
var weekDay = weekDays[date.getDay()];

var consoleDate = "Last login: " + month + " " + weekDay + " " + date.getDate() + " " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("date").innerHTML = consoleDate;

// Terminal emulator based on Jesse Kernaghan's code from
// https://codepen.io/jessekernaghan/pen/xwvdBL

var CMD = {
    init: function (screen) {
        var instance = Object.create(this);
        instance.screen = screen;
        instance.create();
        return instance;
    },
    create: function () {
        var consoleLine = document.createElement('div');
        var lineWrapper = document.createElement('div');
        consoleLine.className = 'console-line';
        consoleLine.innerHTML = '';
        lineWrapper.appendChild(consoleLine);
        this.screen.appendChild(lineWrapper);
        this.field = consoleLine;
        this.fieldwrap = lineWrapper;
    },
    wait: function (time, busy) {
        busy = busy === undefined ? true : busy;
        return new Promise((resolve, reject) => {
            if (busy) {
                this.field.classList.add('waiting');
            } else {
                this.field.classList.remove('waiting');
            }
            setTimeout(() => {
                resolve();
            }, time);
        });
    },
    reset: function () {
        return new Promise((resolve, reject) => {
            this.field.classList.remove('waiting');
            resolve();
        });
    },
    write: function (input) {
        return new Promise((resolve, reject) => {
            var randomSpeed = (max, min) => {
                return Math.random() * (max - min) + min;
            };
            var speed = randomSpeed(70, 90);
            var i = 0;
            var str = '';
            var type = () => {
                str = str + input[i];
                this.field.innerHTML = str.replace(/ /g, '&nbsp;');
                i++;
                setTimeout(() => {
                    if (i < input.length) {
                        if (i % 5 === 0) speed = randomSpeed(80, 120);
                        type();
                    } else {
                        setTimeout(() => {
                            resolve();
                        }, 400);
                    }
                }, speed);
            };
            type();
        });
    },
    command: function () {
        return new Promise((resolve, reject) => {
            var command = document.createElement('div');
            command.className = 'command';
            command.innerHTML = this.field.innerHTML;
            this.screen.insertBefore(command, this.fieldwrap);
            this.field.innerHTML = '';
            resolve();
        });
    },
    response: function (response) {
        return new Promise((resolve, reject) => {
            var output = document.createElement('div');
            output.className = 'response';
            output.innerHTML = response;
            this.screen.insertBefore(output, this.fieldwrap);
            resolve();
        });
    }
};

var cmd = CMD.init(document.getElementById('content'));
cmd.wait(3000, false).
    then(cmd.write.bind(cmd, 'create project Sergio')).
    then(cmd.command.bind(cmd)).
    then(cmd.response.bind(cmd, 'Creating project...')).
    then(cmd.wait.bind(cmd, 1000)).
    then(cmd.response.bind(cmd, 'Project created.')).
    then(cmd.wait.bind(cmd, 2000, false)).
    then(cmd.write.bind(cmd, 'create website sections')).
    then(cmd.command.bind(cmd)).
    then(cmd.response.bind(cmd, 'Creating sections...')).
    then(cmd.wait.bind(cmd, 1000)).
    then(cmd.response.bind(cmd, 'Sections created.')).
    then(cmd.wait.bind(cmd, 2000, false)).
    then(cmd.write.bind(cmd, 'install web packages')).
    then(cmd.command.bind(cmd)).
    then(cmd.response.bind(cmd, 'Installing packages...')).
    then(cmd.wait.bind(cmd, 2000)).
    then(cmd.response.bind(cmd, 'HTML files installed.')).
    then(cmd.wait.bind(cmd, 400)).
    then(cmd.response.bind(cmd, 'CSS files installed.')).
    then(cmd.wait.bind(cmd, 300)).
    then(cmd.response.bind(cmd, 'JavaScript files installed.')).
    then(cmd.wait.bind(cmd, 1000)).
    then(cmd.response.bind(cmd, 'Resources and dependencies installed.')).
    then(cmd.wait.bind(cmd, 1000, false)).
    then(cmd.write.bind(cmd, 'run project')).
    then(cmd.command.bind(cmd)).
    then(cmd.response.bind(cmd, 'Loading environment...')).
    then(cmd.wait.bind(cmd, 2000)).
    then(cmd.response.bind(cmd, 'host: localhost 127.0.0.1')).
    then(cmd.wait.bind(cmd, 300)).
    then(cmd.response.bind(cmd, 'port: 5500')).
    then(cmd.wait.bind(cmd, 300)).
    then(cmd.response.bind(cmd, 'Running...'));
//then(cmd.reset.bind(cmd));

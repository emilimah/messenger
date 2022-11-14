const authorInput = document.querySelector("#author"),
    textInput = document.querySelector("#text"),
    history = document.querySelector(".history"),
    sendBtn = document.querySelector(".btn");

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message {
    constructor(author, text, time) {
        this.author = author;
        this.text = text;
        this.time = time;
    }

    toHtml() {
        return `<b><p>${this.time} ${this.author}: ${this.text}</p></b>`
    }
}

class Messenger {
    message = new Message();
    messages = [];

    send(author, text) {
        this.message.author = author;
        this.message.text = text;
        this.message.time = gettime();

        this.messages.push(this.message.toHtml());
    }

    show_history() {
        history.innerHTML = this.messages.join("");
    }
}

let messenger = new Messenger();

sendBtn.addEventListener("click", () => {
    let author = authorInput.value,
        text = textInput.value;

    if (author && text) {
        messenger.send(author, text);
        messenger.show_history();
        textInput.value = "";
        textInput.focus();
    }
})
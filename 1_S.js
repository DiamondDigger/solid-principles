//Single responsibility principle

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.modified = true
    }

    toHtml() {
        return `
        <div>
            <h1>${this.title}</h1>
            <p>${this.text}</p>
        </div>
        `
    }

    toJSON() {
        return JSON.stringify({
            title: this.title,
            text: this.text,
            modified: this.modified
        },null, 1)
    }
}

const news = new News('Sun - undiscovered planet', 'New research on New Zealand scientists')
console.log(news)
console.log('HTML presentation of news',news.toHtml())
console.log('JSON presentation of news',news.toJSON())



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
}

class PrintNews {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
        <div>
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 1)
    }

    xml() {
        return `
        <news>
            <title>${this.news.title}</title>        
            <text>${this.news.text}</text>        
        </news>
        `
    }
}

const news = new News('Sun - undiscovered planet', 'New research on New Zealand scientists')
const printer = new PrintNews(news)
console.log(printer.html(news))
console.log(printer.xml(news))
console.log(printer.json(news))


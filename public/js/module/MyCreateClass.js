export default class Create {
    constructor(op) {
        this.tags = op.tags
    }

    get _createElement() {
        let tags = []
        this.tags.forEach(tag => {
            let tagName = document.createElement(tag.tagName)

            if(tag.class) {
                if(Array.isArray(tag.class)) {
                    tag.class.forEach(MyClass => {
                        tagName.classList.add(MyClass)
                    })
                } else 
                    tagName.classList.add(tag.class)
            }
            
            if(tag.attribute) {
                if(Array.isArray(tag.attribute)) {
                    tag.attribute.forEach(item => {
                        let attr = item.split(' ')
                        if(attr[1] != undefined)
                            tagName.setAttribute(attr[0], attr[1])
                        else
                            tagName.setAttribute(attr[0], '')
                    })
                } else {
                    let attr = tag.attribute.split(' ')
                    
                    if(attr[1] != undefined)
                        tagName.setAttribute(attr[0], attr[1])
                    else
                        tagName.setAttribute(attr[0], '')
                }
            }

            tags.push(tagName)
        })

        return tags
    }

    insertContent(dates) {
        const elements = this._createElement

        if(Array.isArray(dates)) {
            dates.forEach(date => {
                elements[date.key].innerText = date.content
            })
        } else 
            elements[dates.key].innerText = dates.content

        return elements
    }
}
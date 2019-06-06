// Класс работает с DOM-узлами, определёнными клиентом этого класса.
// Именно поэтому в нём не используется делегирование событий, так как
// неизвестна структура докумкента - известны только элементы маленьких
// изображений и элемент большого изображения; где они находятся и как
// связаны друг с другом иерархически класс не знает.

export default class IamgeGallery {

    constructor(options) {

        options = Object.assign({
            thumbs : [],
            bigImage : null,
            onThumbnailClick : (element, i) => {},
        }, options || {});

        this.thumbs = options.thumbs;
        this.bigImage = options.bigImage;
        this.onThumbnailClick = options.onThumbnailClick;
        this._currentThumbIndex = this.thumbs.length; // за пределами массива - инициализировать будем позже

        const bigImg = 
            this.bigImage.matches("img") ? 
            this.bigImage : 
            this.bigImage.querySelector("img");
        
        this.thumbs.forEach( (thumbnail, i) => {
            
            const newImg = 
                thumbnail.matches("img") ? 
                thumbnail : 
                thumbnail.querySelector("img");
            
            thumbnail.addEventListener("click", () => {
                bigImg.setAttribute("src", newImg.getAttribute("src"));
                this.onThumbnailClick(thumbnail, i);
            });

            if (bigImg.getAttribute("src") == newImg.getAttribute("src")) {
                this._currentThumbIndex = i; // здесь определили индекс маленькой картинки, которая отображена как большая
            }

        });
    }

    get currentThumbIndex() {
        return this._currentThumbIndex;
    }

}
const view = (shop => {
    const _modalContainer = document.getElementById('modalContainer');
    const _spinnerContainer = document.getElementById('spinnerContainer');
    const createElement = (elementType, id, className, events, placeholder, content = '', htmlFor, src, type ) => {
        const element = document.createElement(elementType);
        // element.innerText = content;
        if (events && events.length) {
            for (let i = 0; i < events.length; i++) {
                const event = events[i];
                element[event.type] = event.method;
            }
        }
        if (placeholder) {
            element.placeholder = placeholder;
        }
        if (id) {
            element.id = id;
        }
        if (className) {
            element.className = className;
        }
        if (elementType === 'input') {
            if (type) {
                element.type = type;
            } else {
                element.type = 'text';
            }
            if (type === 'number') {
                element.min = 1;
            }
            element.placeholder = placeholder;
            element.id = id;
        } 
        if (htmlFor) {
            element.htmlFor = htmlFor;
        } else if (elementType === 'label') {
            element.For = id;
        }
        if (elementType === 'img') {
            element.src = src;
        }
        if (elementType === 'p' || elementType === 'h1' || elementType === 'h2' || elementType === 'h3' ||
            elementType === 'h4' || elementType === 'h5' || elementType === 'h6' || elementType === 'a' || elementType === 'button' || elementType === 'td') {
            element.innerHTML = content;
        }
        return element;
    }
    // This function create a modal window with Bootstrap Classes
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false);
        const _modalCol = createElement('div', '', 'col-md-12', false);
        const _modalBox = createElement('div', 'modalBox', 'modal fade');
        const _modalDialog = createElement('div', '', 'modal-dialog modal-dialog-centered modal-lg');
        const _modalContent = createElement('div', '', 'modal-content');
        const _modalHeader = createElement('div', 'modalHeader', 'modal-header');
        const _modalBody = createElement('div', 'modalBody', 'modal-body');
        const _modalFooter = createElement('div', 'modalFooter', 'modal-footer');
        const _modalImage = createElement('img', 'modalImage', 'w-50 m-auto');
        const _modalMessage = createElement('h3', 'modalMessage', 'text-justify, font-weight-bold', );
        const closeModal = createElement('button', 'modalBtn', 'btn btn-danger close', false, false, 'Continue');
        closeModal.type = 'button';
        closeModal.setAttribute('data-dismiss', 'modal');
        if (_modalContainer) {
        _modalContainer.appendChild(_modalRow);
        _modalRow.appendChild(_modalCol);
        _modalCol.appendChild(_modalBox);
        _modalBox.appendChild(_modalDialog)
        _modalContent.appendChild(_modalHeader);
        _modalContent.appendChild(_modalBody);
        _modalContent.appendChild(_modalFooter);
        _modalHeader.appendChild(_modalImage);
        _modalBody.appendChild(_modalMessage);
        _modalFooter.appendChild(closeModal);
        }
        return _modalRow;
    }
    //This function modified content inside the modal
    const showModal = status => {
        const modal = createModal();
        const _modalImage = document.getElementById('modalImage');
        const _modalMessage = document.getElementById('modalMessage');
        const _modalBtn = document.getElementById('modalBtn');
        if (status) {
            if (_modalMessage) {
                _modalImage.src = './img/success.png';
                _modalMessage.classList.add('text-success');
                _modalMessage.innerHTML = 'Su compra ha sido un éxito';
            }
            _modalBtn.textContent = 'Continue';
        } else {
            if (_modalMessage) {
                _modalImage.src = './img/error.png';
                _modalMessage.classList.add('text-danger');
                _modalMessage.innerHTML = 'Ocurrió un error, intente de nuevo.';
            }
            _modalBtn.textContent = 'Intente de Nuevo';
        }
        return modal;
    }
    const createSpinner = () => {
        const _spinner = createElement('div', 'spinner', 'spinner-border text-primary d-none');
        if (_spinnerContainer) {
            _spinnerContainer.appendChild(_spinner);
        }
        return _spinner
    }
    const showSpinner = () => {
        const _spinner = document.getElementById('spinner');
        _spinner.classList.remove('d-none');
    }
    const hideSpinner = () => {
        const _spinner = document.getElementById('spinner');
        _spinner.classList.add('d-none');
    }
// Promise to simulate buying process
const toggleModal = () => {
    showSpinner();
    return new Promise((resolve, reject) => {
        const num = (new Date()).toLocaleTimeString().substr(-1);
        setTimeout(() => {
            hideSpinner();
        }, 1500)
        if (num > 5) {
            resolve();
        } else {
            reject(error);
        }
    })

}
    const createItem = (isActive = '') => {
        const divContainer = createElement('div', false, 'carousel-item ' + isActive);
        const img = createElement('img', false, 'd-block w-100', false, false, false, false, 'https://fravega.vteximg.com.br/arquivos/ids/6191779-1000-1000/celular-liberado-samsung-galaxy-s10e-azul-781304.jpg');
        divContainer.appendChild(img);
        const divSubContainer = createElement('div',false,'carousel-caption d-none d-md-block');
        divContainer.appendChild(divSubContainer);
        const label1  = createElement('h5',false, 'h5', false, false, 'First slide label');
        divContainer.appendChild(label1);
        const paragraph = createElement('p',false, 'p', false, false, 'Nulla vitae elit libero, a pharetra augue mollis interdum.');
        divContainer.appendChild(paragraph);
        return divContainer;
    }

    const createDetailProduct = () => {
        const detailContainer = document.getElementById('detail');
        for (let i = 0; i < 10; i++) {
            const divRow1 = createElement('div', false, 'row');
            const TitleH = createElement('h3', false, 'h3')
            const hrLine = createElement('hr',false, 'hr');
            divRow1.appendChild(TitleH);
            divRow1.appendChild(h3);
            divRow1.appendChild(hrLine);
            const divRow2 = createElement('div', false, 'container')
        }
    }
    
    const createProductsRow = products => {
        const el = document.getElementById('cards-list');
        const rowCard = document.getElementById('rowCard');
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const detail = 'This is a description';
            const card = createCard(product.model, detail, product.price, product.images, product.id);
            rowCard.appendChild(card);
            
        }
        el.appendChild(row);
    }
    const createCard = (cardTitle, body, price, images, id) => {
        let cardImg = './images/default-img.jpg';
        if (images.length) {
            cardImg = `products/${images[0]}`;
        }
        const cardContainer = createElement('div', '', 'col-4', false, false, false, false);
        const cardDeck = createElement('div', '', 'card-deck', false, false, false, false);
        cardDeck.style.marginRight = '10px';
        const card  = createElement('div', '', 'card mb-2', false, false, false, false);
        // card.style.height = '700px';
        const cropImg = createElement('div');
        cropImg.style.height = '200px';
        cropImg.style.overflow = 'hidden';
        const img = createElement('img', '', 'card-img-top img-fluid',false, false, false, false, cardImg);
        cropImg.appendChild(img);
        const cardB = createElement('div', '', 'card-body', false, false, false, false);
        const a = createElement('a', '', '', false, false, cardTitle, false);
        const title = createElement('h5', '', 'card-title', false, false, '');
        a.href = `./detail.html#${id}`;
        title.appendChild(a);
        const text  = createElement('p','','card-text', false, false, body, false);
        const textS = createElement('h3', '', 'badge badge-secondary', false, false, ` $${price.toFixed(2)} `, false);
        card.appendChild(cropImg);
        card.appendChild(cardB);
        cardB.appendChild(title);
        cardB.appendChild(text);
        cardB.appendChild(textS);
        cardContainer.appendChild(cardDeck)
        cardDeck.appendChild(card);
        //const cardId =  document.getElementById('cardId');
        //cardId.appendChild(cardDeck);
        return cardContainer
    }

    const buildCarouselItems = () => {
        const renderArea = document.getElementById('productDetail');
        for (let i = 0 ; i < 10; i++) {
            if (i === 0) {
                const item = createItem('active');
                renderArea.appendChild(item);
            } else {
                const item = createItem('');
                renderArea.appendChild(item);
            }
        }
    }

    const createDetailView = id => {
        const requestProduct = shop.getProduct(id);
            requestProduct
                .then(product => {
                    let cant = checkedShoppingCart(id);
                    if (cant) {
                        cant += 1;
                        shop.updateProduct(product.id, cant);
                    } else {
                        shop.addProduct(product);
                    }
                })
    }
     const checkedShoppingCart = id => {
         const productsCart = shop.getProductsCart();
         let cant;
        if (productsCart) {
            for (let i = 0; i < productsCart.length; i ++) {
                console.log(productsCart[i], id)
                if (productsCart[i].id === parseInt(id)) {
                    cant = productsCart[i].cant;
                }
            }
        }
        return cant
    }

    const buildDetailProduct = () => {
        const renderArea = document.getElementById('Detail');        
                const item = createItem();
                renderArea.appendChild();
    }
                
    const buildItemsFromCart = () => {
        const tBody = document.getElementById('product-list-from-cart');
        for (let i = 0; i < 10; i++) {
            const item = buildItemFromCart('Product Name ' + i, '2090', i);
            tBody.appendChild(item);
        }
    }

    const buildItemFromCart = (productName, price, id) => {
        const inputEvents = [{
            type: 'onchange',
            method: ev => {
                // shop.updateProduct(id, parseInt(ev.target.value));
            }
        }];
        const buttonEvents = [{
            type: 'onclick',
            method: ev => {
                if(confirm('Realmente deseas quitar el producto?')) {
                    const myRow = document.getElementById('row_item_' + id);
                    myRow.style.display = 'none';
                    // shop.removeProduct(id, parseInt(ev.target.value));
                }
            }
        }];
        const tr = createElement('tr', 'row_item_' + id);
        const td1 = createElement('td');
        const img = createElement('img', false, false, false, false, false, false, 'https://fravega.vteximg.com.br/arquivos/ids/6188223-100-100/Heladera-No-Frost-Electrolux-DF3900P-345Lt-160299.jpg?v=637069347225230000');
        td1.appendChild(img);
        const td2 = createElement('td', false, false, false, false, productName);
        const td3 = createElement('td');
        const input = createElement('input', false, 'form-control', inputEvents, 'cantidad', false, false, false, 'number');
        td3.appendChild(input);
        const td4 = createElement('td', false, false, false, false, `$${price}`);
        const td5 = createElement('td');
        const btn = createElement('button', false, 'btn btn-danger', buttonEvents, false, 'Eliminar');
        td5.appendChild(btn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        return tr;
    }
    const buildSecondFromCart = () => {
        const buttonevent1 = [{
            type: 'onclick',
            method: b => {
                shop.confirmProduct();
            }
        }
        ];
        const buttonevent2 = [{
            type: 'onclick',
            method: v => {
                
            }
        }];
        const buttonevent3 = [{
            type: 'onclick',
            method: c => {
                shop.clearproducts();
            }
        }]
        const viewbutton = document.getElementById('view_button');
        const btn1 = createElement('button', false, 'btn btn-primary px-3 mt-3', buttonevent1, false, 'Finalizar Compra', false, false, 'button');
        const btn2 = createElement('button', false, 'btn btn-outline-primary px-3 mt-3', buttonevent2, false, 'Seguir comprando');
        const btn3 = createElement('button', false, 'btn btn-light px-3 mt-3', false, false, 'Cancelar Compra', false, false, false);
        viewbutton.appendChild(btn1);
        viewbutton.appendChild(btn2);
        viewbutton.appendChild(btn3);
    }
    // This function create a modal window with Bootstrap Classes
    const createModal = () => {
        const _modalRow = createElement('div', '', 'row', false);
        const _modalCol = createElement('div', '', 'col-md-12', false);
        const _openBtn = createElement('button', 'openBtn', 'btn btn-primary', false, false, 'Open Modal')
        const _modalBox = createElement('div', 'modalBox', 'modal fade');
        const _modalDialog = createElement('div', '', 'modal-dialog modal-dialog-centered modal-lg');
        const _modalContent = createElement('div', '', 'modal-content');
        const _modalHeader = createElement('div', 'modalHeader', 'modal-header');
        const _modalBody = createElement('div', 'modalBody', 'modal-body');
        const _modalFooter = createElement('div', 'modalBody', 'modal-footer');
        const _modalIcon = createElement('i', 'modalIcon', '');
        const _modalMessage = createElement('h3', 'modalMessage', 'text-justify, font-weight-bold', );
        const closeModal = createElement('button', 'modalBtn', 'btn btn-danger', false, false, 'Continue');
        closeModal.type = 'button';
        closeModal.setAttribute('data-dismiss', 'modal');
        _modalContainer.appendChild(_modalRow);
        _modalRow.appendChild(_modalCol);
        _modalCol.appendChild(_modalBox);
        _modalRow.appendChild(_openBtn);
        _modalBox.appendChild(_modalDialog);
        _modalDialog.appendChild(_modalContent);
        _modalContent.appendChild(_modalHeader);
        _modalContent.appendChild(_modalBody);
        _modalContent.appendChild(_modalFooter);
        _modalHeader.appendChild(_modalIcon);
        _modalBody.appendChild(_modalMessage);
        _modalFooter.appendChild(closeModal);
        return _modalRow;
    }
    //This function modified content inside the modal
    const showModal = (success, error) => {
        const modal = createModal();
        const _icon = document.getElementById('modalIcon');
        const _modalMessage = document.getElementById('modalMessage');
        const _modalBtn = document.getElementById('modalBtn');
        if (success) {
            _icon.classList.add('fas', 'fa-check-circle');
            _modalMessage.classList.add('text-success');
            _modalMessage.textContent = 'Su compra ha sido un éxito';
            _modalBtn.textContent = 'Continue';
        } 
        if (error) {
            _modalMessage.classList.add('fas', 'fa-exclamation-triangle');
            _modalMessage.classList.add('text-warning');
            _modalMessage.textContent = 'Ocurrió un error, intente de nuevo.';
            _modalBtn.textContent = 'Intente de Nuevo';
        }
        return modal;
    }
    // Promise to simulate buying process
    const openModal = new Promise((resolve, reject) => {
        let num = Math.random();
        if (num > 0.5) {
            resolve();
        } else {
            reject(error);
        }
    })
    openModal
        .then(()=> {
            showModal(success);
        })
        .catch((error)=> {
            showModal(error);
        })
    return {
        createModal,
        createElement,
        toggleModal,
        showModal,
        buildCarouselItems,
        createSpinner,
        createProductsRow,
        createDetailView,
        buildItemsFromCart,
        buildSecondFromCart
    }
})(shop);
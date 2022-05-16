import React, {useEffect} from 'react';
import sun from '../all/img/sunny.jpg'
import {useAuth} from "../all/api/useAuth";
import {draw} from "./rose_draw";
import Load from "../loading/loading";
const Forecast=()=> {
    const { isSignedIn} = useAuth()
    const svgns = "http://www.w3.org/2000/svg";
    (function () {
        if (typeof window.CustomEvent === "function") return false;
        function CustomEvent(event, params) {
            params = params || { bubbles: false, cancelable: false, detail: null };
            let evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    const $modal = function (options) {
        try{
            let test = document.getElementById('fuck')
            if(test === null ){
                let
                    _elemModal,
                    _eventShowModal,
                    _eventHideModal,
                    _hiding = false,
                    _destroyed = false,
                    _animationSpeed = 200;

                function _createModal(options) {
                    let
                        elemModal = document.createElement('div'),
                        modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
                        modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
                        modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
                        modalHTML,
                        modalFooterHTML = '';

                    elemModal.classList.add('modal');
                    elemModal.id = "fuck";
                    let rose = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="100%" height="100%" fill="#fff" /></svg>';//document.getElementById("fake").innerHTML
                    modalHTML = modalTemplate.replace('{{title}}', options.title || 'Simple Wind rose, according to latest data');
                    modalHTML = modalHTML.replace('{{content}}', options.content || rose);
                    if (options.footerButtons) {
                        for (let i = 0, length = options.footerButtons.length; i < length; i++) {
                            let modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
                            modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
                            modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
                            modalFooterHTML += modalFooterButton;
                        }
                        modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
                    }
                    modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
                    elemModal.innerHTML = modalHTML;
                    document.body.appendChild(elemModal);
                    return elemModal;
                }

                function _showModal() {
                    if (!_destroyed && !_hiding) {
                        _elemModal.classList.add('modal__show');
                        document.dispatchEvent(_eventShowModal);
                    }
                }

                function _hideModal() {
                    _hiding = true;
                    _elemModal.classList.remove('modal__show');
                    _elemModal.classList.add('modal__hiding');
                    setTimeout(function () {
                        _elemModal.classList.remove('modal__hiding');
                        _hiding = false;
                    }, _animationSpeed);
                    document.dispatchEvent(_eventHideModal);
                }

                function _handlerCloseModal(e) {
                    if (e.target.dataset.dismiss === 'modal') {
                        _hideModal();
                    }
                }

                _elemModal = _createModal(options || {});
                _elemModal.addEventListener('click', _handlerCloseModal);
                _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
                _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

                return {
                    show: function () {_showModal()
                    },
                    hide: _hideModal,
                    destroy: function () {
                        _elemModal.parentElement.removeChild(_elemModal);
                        _elemModal.removeEventListener('click', _handlerCloseModal);
                        _destroyed = true;
                    }
                };
            }
        }
        catch (e) {

        }
        }
    useEffect(()=>{
       if(isSignedIn){ (function () {
            document.querySelector('#show-modal').addEventListener('click', function () {
                try{
                    var modal = $modal();
                    modal.show();
                    draw()
                }
                catch (e){
                }});
        })();}
    })
    if (isSignedIn){
    return (
        <div className="forecast-page">

            <div className="main-column">
                <div className="container-numeral-table1">
                    <table>
                        <thead>
                        <tr>
                            <td className="fix-width-1">Day time</td>
                            <td className="fix-width-2">Temperature °C and weather state</td>
                            <td>Wind (strength), m/s</td>
                            <td>Sea level pressure, hPa</td>
                            <td> Humidity, %</td>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="container-numeral-table">
                    <table>
                        <tbody>
                        <tr>
                            <td className="date" colSpan="9">03 апреля 2022 (вс)</td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">вечер</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-2</span>..<span className="max">+2</span>
                                </div>
                            </td>

                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Облачно
                            </td>
                            <td>
                                <div>2 - 5 (6)
                                </div>
                                <div className="parameter">
                                    С-З
                                </div>
                            </td>
                            <td>
                                <div>
                                    1&nbsp;008
                                </div>
                            </td>
                            <td>
                                <div>46 - 60</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">утро</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-3</span>..<span className="max">+3</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Малооблачно
                            </td>
                            <td>
                                <div>3 - 6 (7)</div>
                                <div className="parameter">З</div>
                            </td>
                            <td>
                                <div>1&nbsp;010</div>
                            </td>
                            <td>
                                <div>47 - 66</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">утро</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-3</span>..<span className="max">+3</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Малооблачно
                            </td>
                            <td>
                                <div>3 - 6 (7)</div>
                                <div className="parameter">З</div>
                            </td>
                            <td>
                                <div>1&nbsp;010</div>
                            </td>
                            <td>
                                <div>47 - 66</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">вечер</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="max">+1</span>..<span className="max">+2</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Кратковременные осадки
                            </td>
                            <td>
                                <div>6 - 7 (16)</div>
                                <div className="parameter">Ю-З</div>
                            </td>
                            <td>
                                <div>1&nbsp;003</div>
                            </td>
                            <td>
                                <div>90 - 98</div>
                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td className="date" colSpan="9">03 апреля 2022 (вс)</td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">вечер</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-2</span>..<span className="max">+2</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Облачно
                            </td>
                            <td>
                                <div>2 - 5 (6)
                                </div>
                                <div className="parameter">
                                    С-З
                                </div>
                            </td>
                            <td>
                                <div>
                                    1&nbsp;008
                                </div>
                            </td>
                            <td>
                                <div>46 - 60</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">утро</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-3</span>..<span className="max">+3</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Малооблачно
                            </td>
                            <td>
                                <div>3 - 6 (7)</div>
                                <div className="parameter">З</div>
                            </td>
                            <td>
                                <div>1&nbsp;010</div>
                            </td>
                            <td>
                                <div>47 - 66</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">утро</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="min">-3</span>..<span className="max">+3</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Малооблачно
                            </td>
                            <td>
                                <div>3 - 6 (7)</div>
                                <div className="parameter">З</div>
                            </td>
                            <td>
                                <div>1&nbsp;010</div>
                            </td>
                            <td>
                                <div>47 - 66</div>
                            </td>
                        </tr>
                        <tr>
                            <td className="fix-width-1">
                                <div className="parameter">вечер</div>
                            </td>
                            <td className="fix-width-2-1">
                                <div className="temperature">
                                    <span className="max">+1</span>..<span className="max">+2</span>
                                </div>
                            </td>
                            <td className="fix-width-2-2">
                                <img alt="weather icon" src={sun}/>
                            </td>
                            <td className="weather fix-width-2-3">
                                Кратковременные осадки
                            </td>
                            <td>
                                <div>6 - 7 (16)</div>
                                <div className="parameter">Ю-З</div>
                            </td>
                            <td>
                                <div>1&nbsp;003</div>
                            </td>
                            <td>
                                <div>90 - 98</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <button id="show-modal" className="show_rose">Show wind rose</button>
        </div>
    );}
    else{
        return <Load />
    }
}

export default Forecast;
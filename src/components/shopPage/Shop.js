import React from "react";
import iphone from './shopImg/iphone.jpeg'
import "./Shop.css"
import { useNavigate } from 'react-router-dom';
import routesPages from "../../routes/routesPages";

const ShopPage = () => {
    const navigate = useNavigate()
    const { mainPageRoute } = routesPages;
    
    const handlerBack = () => {
        navigate(mainPageRoute);
    }

    return (
        <>
        <header>
        <button className="btn_back" onClick={handlerBack}>Назад</button>
        </header>
        <main className="main_container_store">
            <section className="main_wraper">
                <div className="content_items">
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="product_wraper">
                            <img className="img_product" src={iphone}></img>
                            <div className="discount_percentage">
                                <p className="text discount_percentage_text">-14%</p>
                            </div>
                            <button className="viwe_btn"><a href="#" className="text view_product">Быстрый просмотр</a></button>
                        </div>
                        <div className="price_wraper">
                            <p className="text price price_item">86956 ₽</p>
                            <p className="text discount price_item">99990 ₽</p>
                            <p className="text discount_card price_item">85251 ₽</p>
                        </div>
                        <div className="discription_wraper">
                            <p className="text discription">Какое-то описание товара, его преимущество и достоинства</p>
                        </div>
                        <div className="rating_wraper">
                        <div className="rating-area">
                            <input type="radio" id="star-5" name="rating" value="5"></input>
                            <label htmlFor="star-5" title="Оценка «5»"></label>	
                            <input type="radio" id="star-4" name="rating" value="4"></input>
                            <label htmlFor="star-4" title="Оценка «4»"></label>    
                            <input type="radio" id="star-3" name="rating" value="3"></input>
                            <label htmlFor="star-3" title="Оценка «3»"></label>  
                            <input type="radio" id="star-2" name="rating" value="2"></input>
                            <label htmlFor="star-2" title="Оценка «2»"></label>    
                            <input type="radio" id="star-1" name="rating" value="1"></input>
                            <label htmlFor="star-1" title="Оценка «1»"></label>
                        </div>
                        <p className="text raiting_text">86</p>
                        </div>
                        <div className="installment_wraper">
                            <p className="text installment_text">Рассрочка 0-0-6</p>
                        </div>
                        <div className="basket_wraper">
                            <button className="text basket">В корзину</button>
                            <div className="favorites"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default ShopPage;
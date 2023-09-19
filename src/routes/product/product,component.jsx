import {
  ProductContainer,
  GridContainer,
  ImgContainer,
  Description,
  ImgPrev,
  ImgThumb,
  GridQtyContainer,
  QtyContainer,
  Plus,
  Minus,
  Qty,
  ButtonCheckout,
  ButtonSizeContainer,
  Sold,
  LineOne,
  LineTwo,
  CheckoutContainer,
} from "./product.styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/product.selector";
import { useDispatch } from "react-redux";
import { ButtonContainer } from "./product.styles";
import ButtonAddToCart from "../../components/button-add-to-cart/button-add-to-cart.component";
import { setCart } from "../../store/cart/cart.reducer";
import { setRecentProducts } from "../../store/recent-product/recent-product.reducer";

import RecentProduct from "../../components/recentProductFooter/recentProductFooter.component";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const dispatch = useDispatch();

  const [activesIndex, setActiveIndex] = useState(0);
  const [indexButton, setIndexButton] = useState(null);
  const [currentSize, setCurrentSize] = useState("");
  const [currentQty, setCurrentQty] = useState(0);

  const [qty, setQty] = useState(1);
  const { product } = useParams();

  const products = useSelector(selectProducts);

  const productItem = products.find((item) => item.name === product);
  const [image, setImage] = useState(productItem.img[0]);
  const size = productItem.size;
  useEffect(() => {
    setImage(productItem.img[0]);
  }, [products, productItem]);

  useEffect(() => {
    dispatch(setRecentProducts(productItem));
  }, []);

  useEffect(() => {
    const checkQty = () => {
      let i = 0;
      for (const data of size) {
        if (data.qty !== 0) {
          setIndexButton(i);
          setCurrentSize(data.tipe);
          setCurrentQty(data.qty);

          break;
        }
        i++;
      }
    };

    checkQty();
  }, []);

  const changeImageHandler = (index, item) => {
    setActiveIndex(index);
    setImage(item);
  };

  const size2 = productItem.size;

  const activeButtonHandler = (index, size) => {
    setIndexButton(index);
    setCurrentSize(size);
    setQty(1);
    size2.forEach((data) => {
      if (data.tipe === size) {
        setCurrentQty(data.qty);
      }
    });
  };

  const plusHandler = () => {
    for (let cekQty of size) {
      if (cekQty.tipe === currentSize) {
        if (cekQty.qty > qty) {
          setQty(qty + 1);
        }
      }
    }
  };

  const minusHandler = () => {
    if (qty !== 1) {
      setQty(qty - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      setCart({
        name: product,
        img: productItem.img[0],
        size: currentSize,
        harga: productItem.Price,
        qty: qty,
        total: productItem.Price * qty,
      })
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    threshold: 1,
  });

  return (
    <>
      <ProductContainer>
        <GridContainer>
          <div>
            <ImgPrev inview={inView === true}>
              {productItem.img.map((item, index) => {
                return (
                  <>
                    <ImgThumb
                      key={index}
                      active={index === activesIndex}
                      onClick={() => {
                        changeImageHandler(index, item);
                      }}
                    >
                      <div>
                        <img src={`/produk/${item}`} alt="" />
                      </div>
                    </ImgThumb>
                  </>
                );
              })}
            </ImgPrev>
          </div>
          <div>
            <ImgContainer>
              <img src={`/produk/${image}`} alt="" />
            </ImgContainer>
          </div>

          <Description>
            <h1 style={{ fontSize: "20px" }}>{productItem.name}</h1>
            <br />
            Minimal Scuba Jacket dengan desain minimalis yang cocok untuk style
            sehari-hari. Terdapat 2 kantong depan, 1 kantong dalam, dan aksen
            vest cut di bagian bahu.
            <br />
            <br />
            Bahan : Scuba Premium
            <br />
            <br />
            Key Point :
            <br />- Scuba Premium <br />- Easy to Mix & Care <br />- Long Sleeve{" "}
            <br />- Soft Materiam <br />- Snap Button Nylon
            <br />
            <br />
            Model Menggunakan size L
            <br />
            TB : 180cm | BB : 78kg
            <br />
            <br />
            Size Chart :
            <br />
            Size | Lebar Dada x Panjang Badan x Panjang Lengan
            <br />
            XS : 50 cm x 60 cm x 57 cm
            <br />
            S : 52 cm x 62 cm x 58 cm
            <br />
            M : 54 cm x 64 cm x 59 cm
            <br />
            L : 56 cm x 66 cm x 60 cm
            <br />
            XL : 58 cm x 68 cm x 61 cm
            <br />
            XXL : 60 cm x 70 cm x 62 cm
            <br />
            <br />
            (Note : Toleransi ukuran 1-2cm setiap size)
            <br />
            <br />
            Untuk pembelian online, mohon pertimbangkan toleransi perbedaan
            warna dan ukuran produk yang dipesan. Warna pada produk yang
            terlihat pada gambar mungkin tidak 100% sama dengan produk yang
            sebenarnya, disebabkan karna proses pencahayaan pada pengambilan
            gambar atau kualitas layar gadget yang digunakan untuk melihat
            katalog produk.
            <br />
            <br />
            Apabila setelah barang diterima terdapat perbedaan yang dianggap
            terlalu jauh dan tidak dapat diterima, silahkan ajukan penukaran
            barang melalui Customer Service kami. Mohon buat video unboxing
            mulai dari sebelum paket dibuka. Tanpa video unboxing, mohon maaf
            kami tidak dapat menerima complaint (terutama atas kekurangan jumlah
            barang).
            <br />
            <br />
            <br />
            Size :
            <br />
            <ButtonContainer>
              {size.map((size, index) => {
                return (
                  <ButtonSizeContainer
                    onClick={() => activeButtonHandler(index, size.tipe)}
                    key={index}
                    activeButton={indexButton === index}
                  >
                    <Sold sold={size.qty === 0}>
                      <LineOne />
                      <LineTwo />
                    </Sold>
                    {size.tipe}
                  </ButtonSizeContainer>
                );
              })}
            </ButtonContainer>
            <br />
            <QtyContainer sold={currentQty === 0}>
              <GridQtyContainer>
                <Minus qty={qty === 1} onClick={minusHandler}>
                  <b>-</b>
                </Minus>
                <Qty>{qty}</Qty>
                <Plus qty={qty === currentQty} onClick={plusHandler}>
                  <div>
                    <b>+</b>{" "}
                  </div>
                </Plus>
              </GridQtyContainer>
            </QtyContainer>
            <br />
            <ButtonAddToCart
              clickHandler={addToCartHandler}
              disabled={currentQty === 0 ? true : false}
            >
              {currentQty === 0 ? "SOLD OUT" : "ADD TO CART"}
            </ButtonAddToCart>
            <CheckoutContainer sold={currentQty === 0}>
              <ButtonCheckout>BUY IT NOW</ButtonCheckout>
            </CheckoutContainer>
            <br />
            <br />
          </Description>
        </GridContainer>
      </ProductContainer>
      <div ref={ref}>
        <hr style={{ opacity: "0.5" }} />
      </div>

      <br />

      <RecentProduct />

      <br />
    </>
  );
};

export default Product;

import React, { createContext, useState, useEffect } from "react";
import db from '../firebase/firebaseConfig'; 
import { collection, query, getDocs } from "firebase/firestore";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [Inears, setInears] = useState([]);
  const [Headphones, setHeadphones] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [carritoLength, setCarritoLength] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    const getProducts = async () => {
     
        /*IN EARS*/ 
      const qInears = query(collection(db, "in-ears"));
      
      const querySnapshotInears = await getDocs(qInears);
      
      const inearsData = querySnapshotInears.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setInears(inearsData);

      /*IN EARS*/

      /*HEADPHONES*/
      const qHeadphones = query(collection(db, "headphones"));
      
      const querySnapshotHeadphones = await getDocs(qHeadphones);
      
      const HeadphonesData = querySnapshotHeadphones.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setHeadphones(HeadphonesData);
      /*HEADPHONES*/ 
      setCarrito([])
    };
    getProducts();
    console.log(Headphones)
  }, []);

  return (
    <ProductContext.Provider value={{   cantidad, setCantidad, setCarritoLength, carritoLength, setCarrito, carrito,  setHeadphones, Headphones, setInears, Inears, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

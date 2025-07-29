const products = [
  {
    id: 1,
    name: "Gorra Snapback Bordada Hombre",
    description: "Diseño urbano con bordado clásico y visera plana.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-1",
    category: "hombre Snapback Urbano Bordado",
    price: 299.0,
    stock: 12,
  },
  {
    id: 2,
    name: "Gorra Trucker Vintage Mujer",
    description: "Estilo retro con malla trasera y ajuste clásico.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-2",
    category: "mujer Trucker Vintage Ajustable",
    price: 279.5,
    stock: 8,
  },
  {
    id: 3,
    name: "Gorra Infantil Bordada",
    description: "Gorra de algodón con bordado divertido para niños.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-3",
    category: "niños Bordado Ajustable",
    price: 199.99,
    stock: 15,
  },
  {
    id: 4,
    name: "Gorra Edición Limitada 1977",
    description: "Diseño exclusivo con bordado personalizado.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-4",
    category: "hombre Trucker Vintage EdicionLimitada",
    price: 349.0,
    stock: 5,
  },
  {
    id: 5,
    name: "Gorra Minimalista Negra",
    description: "Diseño limpio sin logos, ideal para estilos sobrios.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-5",
    category: "unisex Minimalista Ajustable",
    price: 229.0,
    stock: 10,
  },
  {
    id: 6,
    name: "Gorra Snapback Rosa Mujer",
    description: "Diseño urbano con bordado de rosa roja.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-6",
    category: "mujer Snapback Urbano Bordado",
    price: 289.0,
    stock: 6,
  },
  {
    id: 7,
    name: "Gorra NY Ajustable Hombre",
    description: "Logo clásico bordado, ideal para uso diario.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-7",
    category: "hombre Urbano Ajustable Bordado",
    price: 319.0,
    stock: 9,
  },
  {
    id: 8,
    name: "Gorra Infantil Trucker Azul",
    description: "Diseño divertido con malla y ajuste para niños.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-8",
    category: "niños Trucker Ajustable",
    price: 189.0,
    stock: 14,
  },
  {
    id: 9,
    name: "Gorra Vintage Mujer Bordada",
    description: "Estilo retro con bordado floral.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-9",
    category: "mujer Vintage Bordado Ajustable",
    price: 269.0,
    stock: 7,
  },
  {
    id: 10,
    name: "Gorra Trucker Bordada Hombre",
    description: "Diseño casual con letras bordadas.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-10",
    category: "hombre Trucker Bordado Ajustable",
    price: 259.0,
    stock: 11,
  },
  {
    id: 11,
    name: "Gorra Snapback Minimalista",
    description: "Diseño plano con detalles sutiles.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-11",
    category: "unisex Snapback Minimalista",
    price: 239.0,
    stock: 13,
  },
  {
    id: 12,
    name: "Gorra Edición Limitada Bordada",
    description: "Gorra conmemorativa con bordado exclusivo.",
    img: "https://dummyimage.com/600x400/c4bac4/0011ff&text=vilucap-12",
    category: "unisex EdicionLimitada Bordado Ajustable",
    price: 359.0,
    stock: 4,
  },
];

export const getProducts = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(products);
      }
    }, 2000);
  });
};
export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let oneProduct = products.find((prod) => prod.id === Number(id));
      resolve(oneProduct);
    }, 2000);
  });
};

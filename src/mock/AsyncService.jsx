const products = [
  {
    id: 1,
    name: "Gorra Snapback Bordada Hombre",
    description: "Diseño urbano con bordado clásico y visera plana.",
    img: "https://i.postimg.cc/pTQQWrpg/cap-1.jpg",
    category: "hombre Snapback Urbano Bordado",
    price: 299.0,
    stock: 12,
  },
  {
    id: 2,
    name: "Gorra Trucker Vintage Mujer",
    description: "Estilo retro con malla trasera y ajuste clásico.",
    img: "https://i.postimg.cc/qqkszrKg/cap-2.webp",
    category: "mujer Trucker Vintage Ajustable",
    price: 279.5,
    stock: 8,
  },
  {
    id: 3,
    name: "Gorra Infantil Bordada",
    description: "Gorra de algodón con bordado divertido para niños.",
    img: "https://i.postimg.cc/KjJnTW7f/cap-3.jpg",
    category: "niños Bordado Ajustable",
    price: 199.99,
    stock: 15,
  },
  {
    id: 4,
    name: "Gorra Edición Limitada 1977",
    description: "Diseño exclusivo con bordado personalizado.",
    img: "https://i.postimg.cc/jS4rf0LP/cap-4.webp",
    category: "hombre Trucker Vintage EdicionLimitada",
    price: 349.0,
    stock: 5,
  },
  {
    id: 5,
    name: "Gorra Minimalista Negra",
    description: "Diseño limpio sin logos, ideal para estilos sobrios.",
    img: "https://i.postimg.cc/mg2mm0mQ/cap-5.webp",
    category: "unisex Minimalista Ajustable",
    price: 229.0,
    stock: 10,
  },
  {
    id: 6,
    name: "Gorra Snapback Rosa Mujer",
    description: "Diseño urbano con bordado de alebrije.",
    img: "https://i.postimg.cc/ZnScpg9v/cap-6.webp",
    category: "mujer Snapback Urbano Bordado",
    price: 289.0,
    stock: 6,
  },
  {
    id: 7,
    name: "Gorra NY Ajustable Hombre",
    description: "Logo clásico bordado, ideal para uso diario.",
    img: "https://i.postimg.cc/MpN114NZ/cap-7.webp",
    category: "hombre Urbano Ajustable Bordado",
    price: 319.0,
    stock: 9,
  },
  {
    id: 8,
    name: "Gorra Infantil Trucker Azul",
    description: "Diseño divertido con malla y ajuste para niños.",
    img: "https://i.postimg.cc/NGd91Srh/cap-8.webp",
    category: "niños Trucker Ajustable",
    price: 189.0,
    stock: 14,
  },
  {
    id: 9,
    name: "Gorra Vintage Mujer Bordada",
    description: "Estilo retro con bordado floral.",
    img: "https://i.postimg.cc/65DQcXWP/cap-9.webp",
    category: "mujer Vintage Bordado Ajustable",
    price: 269.0,
    stock: 7,
  },
  {
    id: 10,
    name: "Gorra Trucker Bordada Hombre",
    description: "Diseño casual con letras bordadas.",
    img: "https://i.postimg.cc/hvQBQXdt/cap-10.webp",
    category: "hombre Trucker Bordado Ajustable",
    price: 259.0,
    stock: 11,
  },
  {
    id: 11,
    name: "Gorra Snapback Minimalista",
    description: "Diseño plano con detalles sutiles.",
    img: "https://i.postimg.cc/K821F26M/cap-11.webp",
    category: "unisex Snapback Minimalista",
    price: 239.0,
    stock: 13,
  },
  {
    id: 12,
    name: "Gorra Edición Limitada Bordada",
    description: "Gorra conmemorativa con bordado exclusivo.",
    img: "https://i.postimg.cc/9MKfk5Pz/cap-12.webp",
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

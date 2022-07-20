function data(i,id,c,t,d,p,sp,r){
    this.image=i
    this.productID=id
    this.category=c
    this.title=t
    this.description=d
    this.price=p
    this.stackedprice=sp
    this.rating=r
}

let productdata1=new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/vit_c_1_ebdbf467-a1d3-454f-a18f-e9e753de65c8_360x.png?v=1657950494","p1","moisturizer","Vitamin C Moisturizer With Kakadu Plum & Vitamin E| Fades Pigmentation & Dark Spots| Oily & Dry Skin| Women and Men","Makes Skin Glow | Moisturizes | Even Tones OILY  DRY SKIN TYPE","599","499","4.7 ★");
let productdata2 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/20VITC_2_360x.jpg?v=1656934686","p2","serum","20% Vitamin C Serum with Blood Orange | For Skin Glow | Fades Pigmentation & Dark Spots| Combination, Oily, Dry Skin | Women and Men","Pure L-ascorbic Acid | Freshly Made FOR ALL SKIN TYPES","499","450","4.7 ★");
let productdata3 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/CICASUNSCREEN_2_360x.jpg?v=1656934758","p3","sunscreen","Cica + Niacinamide Face Sunscreen SPF 50 PA+++| Broad Spectrum UV Protection Sunscreen| Oily & Acne Prone Skin| Ultra Matte Finish With No White Cast| Women & Men","OMC Oxybenzone-free |  Easily blendable | Matte finish OILY, ACNE PRONE & SENSITIVE SKIN","599","499","4.0 ★");
let productdata4 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/WATERMELONWASH_1_360x.jpg?v=1656934311","p4","facewash","Watermelon Super Glow Vitamin C Face Wash Gel| For Oil Control & Deep Cleansing | Combination & Oily Skin |100% Sulphate Free| Women and Men","Sulphate-free | Gently exfoliates | Boosts skin glow FOR OILY, NORMAL, COMBINATION SKIN","650","600","4.4 ★")
let productdata5 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/cicafacewash_12daa62a-9f18-4d9f-bacb-1ba15a1f4fad_360x.jpg?v=1656935431","p5","facewash","Cica & Green Tea Face Wash With Salicylic| Treats Acne & Acne Scars| Oily, Acne Prone Skin| 100% Sulphate Free| Women & Men","Sulphate-free | Unclogs Pores  | With tea tree oil FOR OILY, ACNE PRONE AND SENSITIVE SKIN","499","450","4.7 ★")
let productdata6 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/nightcream_2_2e3e7434-5b2f-4cf6-aef9-ade90482eea2_360x.jpg?v=1657950488","p6","cream","Retinol & Ceramide Age Defense Night Cream For Face| Treats Fine Lines & Wrinkles | Mature, Combination, Dry Skin| Women & Men","Firms skin | Boosts collagen | Delays aging ALL SKIN TYPES","654","565","4.7 ★")
let productdata7 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/NIACINAMIDE_1_360x.jpg?v=1656934364","p7","serum","10% Niacinamide Face Serum With Zinc & Antioxidants| Treats Acne, Dark Spots & Acne Scars| For Oily, Sensitive ,Acne Prone Skin| Women & Men","Spot Correcting | Balances oil  | Controls breakouts ALL SKIN TYPES","653","599","4.4 ★")
let productdata8 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/PROBIOTICS_1_1_1_11e529c1-3009-468e-8cf3-60bea660eeba_360x.jpg?v=1657950474","p8","moisturizer","72 HR Hydrating Probiotic Gel Moisturizer For Face With Hyaluronic & Rice Water| For Healthy,Soft Skin| Combination, Dry Skin| Women & Men","Balances microbiome | Strengthens skin barrier | Oil-Free","599","450","4.7 ★")
let productdata9 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Untitled-1_4_360x.png?v=1657603288","p9","serum","Vitamin C++ Glow Face Serum With Hyaluronic & Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots| Oily,Dry Skin| Women & Men","Even skin tone | Natural Vitamin C | Brightens & Firms FOR ALL SKIN TYPES","799","699","4.0 ★")
let productdata10 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-Green-Clay-Mask_360x.jpg?v=1656420733","p10","mask","Salicylic & French Green Clay Face Mask With Match Tea| Reduces Acne, Dark Spots & Blemishes| Oily & Acne Prone Skin| Women & Men","Unclogs Pores | Fades acne scars | Fights Pollution FOR OILY, ACNE-PRONE SKIN","656","609","4.7 ★")
let productdata11 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/LIPMASKW_APPLI_1_360x.jpg?v=1656934490","p11","mask","Vitamin C Lip Mask With Vitamin E, Shea Butter, Hyaluronic & Almond Oil | Treats Pigmented Dark Lips | Women & Men","Fades pigmentation | Deeply nourishes | Adds a pink tint FOR ALL SKIN TYPES","656","568","4.4 ★")
let productdata12 = new data("https://cdn.shopify.com/s/files/1/0361/8553/8692/products/pinkclaymask_1f29e041-04b7-4b13-875e-0ffa582f92e2_360x.jpg?v=1656935595","p12","mask","Vitamin C Pink Clay Face Mask With Kakadu Plum| For Skin Glow| Fades Pigmentation & Dark Spots, Boosts Collagen| Oily,Normal & Dry Skin| Women & Men","Deep cleanses | Reverses dullness | Even tones skin ALL SKIN TYPES","489","450","4.7 ★")

let productdataArr = [];
productdataArr.push(productdata1,productdata2,productdata3,productdata4,productdata5,productdata6,productdata7,productdata8,productdata9,productdata10,productdata11,productdata12)

function display(data){
    let cont = document.querySelector("#products")
    
    data.forEach((el)=>{
     let image = document.createElement("img");
     image.src=el.image;
     let rating = document.createElement("p")
     rating.innerText=el.rating;
     let title = document.createElement("p")
     title.innerText=el.title;
     let price = document.createElement("p")
     price.innerText=el.price;
     let stackedprice = document.createElement("p")
     stackedprice.innerText=el.stackedprice;
     let prdiv = document.createElement("div")
     let addtocart = document.createElement("button")
     addtocart.innerText="Add To Cart"
     prdiv.append(price,stackedprice);
     let div = document.createElement("div")
     div.append(image,rating,title,prdiv,addtocart);
     cont.append(div);

    })
}
display(productdataArr);
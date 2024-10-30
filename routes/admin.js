var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const phones = [
    {
      title: "iPhone 14 Pro Max",
      description:
        "Apple's flagship phone with advanced camera features, A16 Bionic chip, and ProMotion display.",
      image:
        "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
      category: "Smartphone",
    },
    {
      title: "Sony Xperia 1 V",
      description:
        "Sony's top-tier phone focused on camera capabilities and a 4K OLED display.",
      image:
        "https://www.assuredzone.com/wp-content/uploads/2023/05/Sony-Xperia-1-V.jpg",
      category: "Smartphone",
    },
    {
      title: "Asus ROG Phone 7",
      description: "Gaming-focused smartphone with AMOLED screen ",
      image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-7-1.jpg",
      category: "Gaming Smartphone",
    },
    {
      title: "Oppo Find X6 Pro",
      description:
        "Oppo’s flagship with advanced camera system and high-resolution display.",
      image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x6-pro-1.jpg",
      category: "Smartphone",
    },
    {
      title: "Huawei Mate 50 Pro",
      description:
        "Huawei's latest flagship with powerful cameras and impressive display technology.",
      image:
        "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate-50-pro-1.jpg",
      category: "Smartphone",
    },
    {
      title: "Realme GT Neo 5",
      description:
        "High-performance, budget-friendly phfergfrfgtdfrsdefrgrtgtfgyrtftrtytyht6y6tyone with 144Hz display and Snapdragon 8+ fdefrygtGen 1.",
      image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt-neo5-1.jpg",
      category: "Budget Smartphone",
    },
  ];

  res.render("admin/view-pro", { admin: true, phones });
});

router.get("/add-pro", function (req, res,next) {
  res.render("admin/add-pro");
});

router.post('/add-pro',(req,res)=>{
  console.log(req.body);
  
})
module.exports = router;

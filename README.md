# Air In One Mobile App

[![pipeline status](https://git.iotech.co.th/iotech/air-in-one/badges/master/pipeline.svg)](https://git.iotech.co.th/iotech/air-in-one/-/commits/master)

### installation

```
git clone https://git.iotech.co.th/iotech/air-in-one.git
cd air-in-one
yarn install

// link file
react-native link react-native-vector-icons
react-native link react-native-gesture-handler
react-native link react-native-screens

// start
yarn start
```

### สิ่งที่ให้ทำ ภายใน อังคารที่ 18/08/2020

- ปรับแต่งหน้าดังต่อไปนี้ให้ใช้งานได้และสวยงาม ตาม Design
  - LoginMenu
  - Air1
  - AirType
  - ChooseAir
- ย้าย Code ที่เขียนโดยใช้ Component ของ Native Base มาใช้แบบ React Native ปกติ เนื่องจาก Native Base ช้าและมีปัญหาเยอะ โดยเมื่อย้ายเสร็จให้เอา Native Base ออก
- Link Router และปุ่มใหม่ให้ทำงานเริ่มจาก.  
  `Login->Air1->ChooseAir->Product->ProductDetail`

### อัปเดตงานวันที่ 24/08/2020

- change variable style
  อัปเดต ตัวแปรในการจัดการหน้าตาให้สามารถแก้ไขภายหลังได้ง่ายขึ้น
- update Product page
  - อัปเดต Function หน้า Product ให้ทำงานถูกต้องเเละใช้งานได้ 70%
- add Search product
  - เพิ่มความสามารถให้ ค้นหาได้ตาม flow ที่ได้วางไว้
- add Search address
  - สามารุถค้นหาได้ แต่ยังไม่สามารถนำมาใช้งานกับแผนที่ได้
- add See cart
  - สามารถกดดูตะกร้าได้ แต่ไม่สามารถเพิ่ม Item ไปยัง ตะกร้าได้
- add filter search product
  - อัปเดต ส่วนของการกรองการค้นหา ให้ทำได้ตาม flow ที่วางไว้

### อัปเดตงานวันที่ 25/08/2020

- update Product page
  - สามารถเลือกสิ้นค้าไปยังรถเข็นได้
- create Cart page
  - สามารถดูสินค้าที่เราเลือกมาได้
- Create Shop page
  - เมื่อเลือกสิ้นค้าแล้ว สามารถเลือกร้านค้าได้
- Create Shop in page
  - สามารถดูรายละเอียดของร้านค้าได้
- update function
  - สามารถใช้งาน function หลักได้

### อัปเดตงานวันที่ 26/08/2020

- create Payment page

  - หลังจากเลือกของในตะกร้าแล้ว สามารถกดมายังหน้านี้ได้
  - สามารถกดเพิ่มบัตรเครดิตได้ แต่ยังไม่บันทึกกลับไป
  - ยังมีส่วนของ คูปองที่ยังไม่ได้เพิ่ม กำลังหาวิธีจัดการ https://imgur.com/P45a6QV

- Create Compare Product page
  - ยังไม่สามารถกดเลือก Product ก่อนเปรียบเทียบได้ แต่ให้กดเข้ามาได้เลย

### อัปเดตงานวันที่ 27/08/2020

- create Specify Room page
- update calculateBTU page
- เปลี่ยนจากการใช้ localstorage มาใช้ redux แทน
- อัปเดตการเลือกรายการแอร์ , เปรียบเทียบแอร์
- update Payment page

### อัปเดตงานวันที่ 28/08/2020

- create RoomInfo page
- เชื่อมทุกหน้าเข้าด้วยกัน
- update bug หน้าเปรียบเทียบ และ เลือก สินค้า (อาจมีบัค)

### อัปเดตงานวันที่ 09/09/2020

- create section ติดตั้งอย่างเดียว
- create Choose BTU page
- create Find Product Page
- update style variable

### อัปเดตงานวันที่ 10/09/2020

- update section ติดตั้งอย่างเดียว
- create Choose Type Air page
- update Find Product Page
- update style variable for clean code
  ** ติดปัญหาเรื่อง การเลือกแอร์ไปอัพเดต เลยทำให้ล่าช้า
  ** ภายใน 11/09/2020 น่าจะเสร็จในส่วนของ section ติดตั้งอย่างเดียว

### อัปเดตงานวันที่ 11/09/2020

- update section ติดตั้งอย่างเดียว finish

### อัปเดตงานวันที่ 14/09/2020

- create page ซื้อพร้อมติดตั้ง
- create page ถูกที่สุด
- create page ประหยัดที่สุด
- create page โปรโมชั่น
- create page Clearance
- update menu ติดตั้งอย่างเดี่ยว
- update filter search menu
- test responsive ui
- test ui for all device support
- update Login page for support all device
- update store redux

### อัปเดตงานวันที่ 16/09/2020

- update ในส่วนของ ui menu ให้รองรับทุกหน้าจอ
- update page calculate btu ให้รองรับทุกหน้าจอ \** อัพเดตเท่าที่ไม่เจอปัญหา ยังติดบัคในส่วนของการ mock up ข้อมูล และการจัดการเรื่อง menu
  *ปัญหาที่เจอ ได้วิธีแก้ไขแล้ว จะอัพเดตภายใน 18/09/2020

### อัปเดตงานวันที่ 18/09/2020

- update ui for support all device
- update calculate BTU

* omise เทสผ่านแล้ว จะเอามาปรับใช้ในวันจัน
  \*\* หน้า calculate ยังไม่สามารถใช้งานได้ จะมาแก้ภายหลัง

### อัปเดตงานวันที่ 21/09/2020

- update flow หลักที่ไม่ใช่ flow calculate เรียบร้อยแล้ว  
   พร้อมทั้งผูกผ่าน redux ทั้งหมด หากกดเลือกอะไรไปก็จะเก็บข้อมูล ทุกการกระทำ
*ต้องย้อนถอยมานิดนึงเพราะข้อมูลมีหลายแบบ ทำให้พอจัดการข้อมูลไป เล่นหลาย flow ไปเกิดความซับซ้อน ต้องย้อนกลับมาแก้ไข
**พรุ่งนี้จะ mock up data ที่ใช่คำนวณ btu ทั้งหมด 


### อัปเดตงานวันที่ 22/09/2020

- update  flow calculate BTU เรียบร้อยแล้ว  
พร้อมทั้งผูกผ่าน redux ทั้งหมด หากกดเลือกอะไรไปก็จะเก็บข้อมูล ทุกการกระทำ
**พรุ่งนี้จะอัปเดตส่วนรถเข็นใหม่ เนื่องจากต้องทำให้สอดคล้องกับส่วนที่แก้ไปในวันนี้และเมื่อวาน


### อัปเดตงานวันที่ 23/09/2020

- update flow calculate BTU ใหม่ในส่วนของ room info และ mock up ข้อมูลส่วนของตัวเลือก
- update สรุปแนะนำแอร์
*วันนี้ยังไม่ได้ อัปเดตเรื่องรถเข็น 


### อัปเดตงานวันที่ 25/09/2020
- update หน้า main  
- update หน้า choose air
- update หน้า product 
- update หน้า select type 
- update ในส่วนของ compare air and choose air


### อัปเดตงานวันที่ 05/10/2020
- redesign main page 
- redesign chooseair page


### อัปเดตงานวันที่ 06/10/2020
- update chooseair page 
- redesign selectType


### อัปเดตงานวันที่ 06/14/2020
- update List product page
- update Main page

### อัปเดตงานวันที่ 20/10/2020

- update style
- update cart page
- update payment

### อัปเดตงานวันที่ 21/10/2020
- สร้างหน้าค้นหาแอร์ ในหน้าหลัก
- อัปเดต ui หน้าค้นหาด้วยแผนที่
- อัปเดตหน้ารถเข็น
- สร้างส่วนคัดกรองในหน้าเลือกสินค้า
- อัปเดตส่วนการค้าหาในหน้าเลือกสินค้า
- อัปเดตการแสดงผลของขอบ device ในส่วนของ flow การซื้อสินค้าหลัก
- เชื่อมต่อหน้า และ ส่วนแสดงผลใน flow การซื้อสินค้าหลักหมดแล้ว เช่น 
    - เมื่อกดค้นหาจะมีส่วนแสดงผมเพิ่มเติม
    - เมื่อกด filter จะมี filter ต่างๆให้เลือกใช้งาน

### อัปเดตงานวันที่ 22/10/2020
- อัปเดตส่วนของสรุปการเลือกรายละเอียดตัวกรองต่างๆ ก่อนถึงหน้าเลือกซื้อแอร์ ให้สอดคล้องกับที่เลือกมา ไม่ว่าจะเลือกมาจาก flow ซื้อหลัก หรือจากการคำนวณ BTU
- อัปเดตส่วน ui ของ flow คำนวณ BTU ทั้งหมด
- อัปเดตฟังก์ชันการทำงาน ของ flow คำนวณ BTU ให้ไปสรุป ในหน้าสรุปได้


### อัปเดตงานวันที่ 26/10/2020
- อัปเดตงานในส่วนของ flow โปรโมชั่นทั้งหมด
  - เพิ่มหน้า โปรโมชั่น
  - เพิ่มหน้า ถูกที่สุด
  - เพิ่มหน้า ประหยัดที่สุด
  - เพิ่มหน้า Clearance
  - เพิ่มหน้า ค้นหาใน flow โปรโมชั่น
  - เพิ่มหน้า Main
     ** เมื่อกดเข้าเมนูโปรโมชั่นต่างๆ พอกดย้อนกลับ จะกลับเข้าสู่หน้า Main promotion ก่อนที่จะย้อนกลับเข้าสู้หน้าเมนูหลัก

### อัปเดตงานวันที่ 27/10/2020
- อัปเดตงานในส่วนของ flow งานโปรเจค
  - เพิ่มหน้าฟอร์ม ข้อมูลของคุณ
  - เพิ่มหน้าฟอร์ม ข้อมูลแอร์
  - เพิ่มหน้าฟอร์ม ข้อมูลติดต่อ
  - เพิ่มหน้าฟอร์ม ประเมินราคา
  - เพิ่มหน้าสรุปประเมินราคา
  - เพิ่มหน้ายินยันฟอร์ม


### อัปเดตงานวันที่ 28/10/2020
- อัปเดตงานในส่วนของ flow ติดตั้งอย่างเดียว
  - เพิ่มหน้า เลือกประเภทหรือค้นหาเครื่องปรับอากาศ
  - เพิ่มหน้า เลือกประเภท
  - เพิ่มหน้า ค้นหาเครื่องปรับอากาศ
  - เพิ่มหน้า สรุปการเลือกประเภท
- อัปเดต picker ของตัวแอปใหม่

### อัปเดตงานวันที่ 29/10/2020
- อัปเดตงานในส่วนการเลือกซื้อสินค้า
- อัปเดตงานในส่วนการเปรียบเทียบ
- อัปเดตหน้าเปรียบเทียบสินค้า
- อัปเดต function การทำงานหลักๆ

### อัปเดตงานวันที่ 30/10/2020
- อัปเดต omise 












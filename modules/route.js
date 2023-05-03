const router = require('express').Router();
const carcontroller=require('./conroller')
const Sql=require('../sql')

router.post('/register',carcontroller.register);
router.post('/signin',carcontroller.signin);
router.post('/appartment',carcontroller.Appartment);
router.post('/appartprint',carcontroller.Appartment);
router.get('/download',carcontroller.down);
router.post('/appart',carcontroller.read);
router.post('/cot',carcontroller.cot);
router.post('/cottage',carcontroller.Cottage);
router.post('/ecofriend',carcontroller.Ecofriend);
router.post('/eco',carcontroller.ecof);
router.post('/farm',carcontroller.Farm);
router.post('/far',carcontroller.far);
router.post('/modern',carcontroller.Modern);
router.post('/mod',carcontroller.mode);
router.post('/palace',carcontroller.Palace);
router.post('/pal',carcontroller.pal);
router.post('/studio',carcontroller.Studio);
router.post('/stu',carcontroller.stu);
router.post('/image',carcontroller.Image);
router.get('/sq',Sql.Sql);



module.exports = router;
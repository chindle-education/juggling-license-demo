//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// This is express routing, it has a object which is router. It is listening out for when a user submits the form and posts that form to /new/email address. When that happens it will redirect to new/code.
router.post('/new/email-address', (req, res) => {
    res.redirect('/new/code')
})

router.post('/new/code', (req, res) => {
    res.redirect('/new/name')
})

router.post('/new/name', (req, res) => {
        if(req.query.returnUrl){
            res.redirect(req.query.returnUrl)
        } else {
          res.redirect('/new/country')
        }
})

router.post('/new/country', (req, res) => {
    res.redirect('/new/juggling-balls')
})

// This means if the number of balls (name of radios) is none - send to the shutter page. Anything else, go to juggling trick. 

router.post('/new/juggling-balls', (req, res) => {
    if (req.body.new.numberOfBalls == 'None, I cannot juggle'){
        res.redirect('/new/not-eligible')
    }   else {
    res.redirect('/new/juggling-trick')
    }
})

router.post('/new/juggling-trick', (req, res) => {
    res.redirect('/new/juggling-objects')
})

router.post('/new/juggling-objects', (req, res) => {
    res.redirect('/new/check')
})

router.post('/new/check', (req, res) => {
    res.redirect('/new/confirmation')
})


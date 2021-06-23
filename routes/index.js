const express = require('express');
//const bodyParser = require('body-parser')
const router = express.Router();
const Wealth = require('../models/Post');

// to send request data from html on post request, add these two lines
router.use(express.urlencoded())
router.use(express.json());

async function wealth() { 
    try{
        let arr=[];
        let count=0;
        let sum;
        let temp;
        if(!temp){
            temp=await Wealth.find().lean()
        }
        //for adding names on clicking 'Add user'
        function add_name(){
            arr[count]=temp[count];
            count++;
        }
        //for doubling money on clicking 'Double_money'
        function double_money(){
            arr.forEach(y=>{
                y.wealth=y.wealth.replace(',','')
                y.wealth=y.wealth.replace('$','')
            })
            arr.forEach(x=>{
                x.wealth='$'+(parseInt(x.wealth)*2).toString()+'.00';
            })
        }
        
        function show_millionaires(){
            let copy=arr;
            arr=[];
            copy.forEach(y=>{
                y.wealth=y.wealth.replace(',','')
                y.wealth=y.wealth.replace('$','')
                if((parseInt(y.wealth))>1000000){
                    y.wealth='$'+(y.wealth).toString();
                    arr.push(y);
                }
            })
        }

        const propComparator = (propName) =>
        (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1

        function sort_richest(){
            arr.forEach(y=>{
                y.wealth=y.wealth.replace(',','')
                y.wealth=y.wealth.replace('$','')
                y.wealth=parseInt(y.wealth)
            })
            arr=arr.sort(propComparator('wealth'))
            arr.forEach(t=>{t.wealth='$'+(t.wealth).toString()+'.00'})
        }

        function calculate_sum(){
            arr.forEach(y=>{
                y.wealth=y.wealth.replace(',','')
                y.wealth=y.wealth.replace('$','')
                y.wealth=parseInt(y.wealth);
                sum+=y.wealth;
            })
            arr.forEach(t=>{t.wealth='$'+(t.wealth).toString()+'.00'})
            sum='$'+sum.toString()+'.00';
        }


    router.get('/',(req,res)=>{
        arr=[]
        count=0
        console.log('get!')
        res.render('home');
    })
     router.post('/',(req,res)=>{
         if(req.body.button_id.match('add_user')){
            add_name();
            res.render('home',{
                arr:arr,
                total:{
                    status:false,
                    sum:sum
                }
            })
            }
         else if(req.body.button_id.match('double_money')){
                double_money();
                res.render('home',{
                    arr:arr,
                    total:{
                        status:false,
                        sum:sum
                    }
                })
            }
         else if(req.body.button_id.match('million')){
                show_millionaires();
                res.render('home',{
                    arr:arr,
                    total:{
                        status:false,
                        sum:sum
                    }
                })
            }
        else if(req.body.button_id.match('richest')){
                sort_richest();
                res.render('home',{
                    arr:arr,
                    total:{
                        status:false,
                        sum:sum
                    }
                })
            }
        else if(req.body.button_id.match('calculate')){
                sum=0;
                calculate_sum();
                console.log(sum);
                res.render('home',{
                    arr:arr,
                    total:{
                        status:true,
                        sum:sum
                    }
                })  
            }
        })
    }
    catch(err){
        throw err;
    }
};
wealth();
module.exports=router;




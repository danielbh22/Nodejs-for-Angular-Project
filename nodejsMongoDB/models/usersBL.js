const express = require('express');

const User = require('../models/userModel');

exports.getAllUsers = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({},function(err,usersData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(usersData);
            }
        })
    })
}

exports.getuser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findById(id, function(err,userData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData);
            }
        })
    })
}


exports.addUser = function(userD)
{
    return new Promise((resolve,reject) =>
    {
        let newUser = new User({
            name : userD.name,
            email : userD.email,
            street : userD.street,
            city : userD.city,
            zipcode :userD.zipcode,
            tasks : userD.tasks,
            posts : userD.posts
        });

        newUser.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created !');
            }
        })
    })
}

exports.updateUser = function(id,userData)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndUpdate(id,
            {
                name : userData.name,
                email : userData.email,
                street : userData.street,
                city : userData.city,
                zipcode :userData.zipcode,
                tasks : userData.tasks,
                posts : userData.posts
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Updated !')
                }
            })
           
    })
    
}

exports.deleteUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted !')
                }
            })
    })
}
exports.getAllUsers = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have got all the users"
    });
}

exports.getUser = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have got a single user"
    });
}

exports.createUser = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have created new user"
    });
}

exports.updateUser = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have updated the user"
    });
}

exports.deleteUser = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "Delete user successfull"
    });
}
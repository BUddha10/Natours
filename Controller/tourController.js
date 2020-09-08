exports.getAllTours = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have got all the tours"
    });
}

exports.getTour = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have got a single tour"
    });
}

exports.createTour = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have created new tour"
    });
}

exports.updateTour = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "you have updated the tour"
    });
}

exports.deleteTour = (req, res)=>{
    res.status(200).json({
        status: "success",
        message: "Delete successfull"
    });
}
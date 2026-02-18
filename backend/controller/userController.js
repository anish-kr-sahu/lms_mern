import User from "../model/userModel.js"

// find current user
export const getCurrentUser = async(req,res) =>{
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(404).json({
                msg: "User not found"
            })
        }
        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).json({msg:
            `GetCurrent User error${error}`
        })
    }
}
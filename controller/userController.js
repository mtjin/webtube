import routes from "../routes";

export const getJoin = (req, res) =>{
    res.render("join", {pageTitle: "Join"});
}

export const postJoin =(req,res) => {
    console.log(req.body);
    const {
        body: {name, email, password, password2}
    } = req;
    if(password !== password2){ //패스워드가 서로다르면 에러상태코드 전달
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    }else{
        //TODO: Register User
        //TODO: Log user in
        res.redirect(routes.home); //로그인성공하면 홈화면으로 리다이렉트
    }
};

export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
};

export const userDetail = (req, res) =>
    res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) =>
    res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) =>
    res.render("changePassword", {pageTitle: "Change Password"});
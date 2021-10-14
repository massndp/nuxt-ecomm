export default function({$auth, redirect}){
    if(!$auth.loggedIn){
        return redirect('/admin/login')
    }

    //check role admin
    if($auth.strategy.name != "admin"){
        return redirect('admin/login')
    }else{
        return
    }
}
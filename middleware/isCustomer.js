export default function({$auth, redirect}){
    if(!$auth.loggedIn){
        return redirect('/customer/login')
    }

    if($auth.strategy.name != "customer"){
        return redirect('/customer/login')
    }else{
        return
    }
}
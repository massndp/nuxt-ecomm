export default function({$auth, redirect}){
    
    //check login
    if($auth.loggedIn){
        //check role admin
        if($auth.strategy.name=="admin"){
            return redirect('/admin/dashboard')
        }

        //check role customer
        if($auth.strategy.name == "customer") {
            return redirect('/customer/dashboard')
        }   
    }
}
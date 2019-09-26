import React,{Component} from 'react';

class Pm_number1 extends Component {
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Input Paragraph:"/>
                </form>
            </div>            
            );
        
        function letter(n) {
        
            if (n < 20)
            return proper[n];
        
            return tenth[n / 10 - 2 | 0] + proper[n % 10];
        }

      

        function wordLength(n) {

            if (n < 100)
            return letter(n);
        
            var res = 0;
            var h = Math.floor(n / 100) % 10;
            var t = Math.floor(n / 1000);
            var s = n % 100;
        
            if (n > 999)
            res+= below100(t) + "thousand".length;
            if (h !== 0)
            res+= proper[h] + "hundred".length;
            if (s !== 0)
            res+= "and".length + below100(s);
            num+= wordLength(i);
            return num;
            return res;
        }


        
        
    }

}

export default Pm_number1;
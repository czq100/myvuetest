export default {
    async getChannels() {
        var resp = await fetch("/dict/dictService/getItemList?access_token=c4215a32bbf74a2aa410db8473a58f4dV8k5&dictName=new_industry");
        var data = await resp.json();
        return data;
    }
}
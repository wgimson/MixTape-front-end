
class MixTape {
  _id:string;
  title: string;
  description: string;
  date: Date;
  status: string;
  playlist: string;

  constructor(
  ){
      this.title = "";
      this.description = "";
      this.date = new Date();
      this.status = "";
      this.playlist = "";
  }
}

export default MixTape;

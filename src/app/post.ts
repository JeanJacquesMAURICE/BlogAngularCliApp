export class Post {

  constructor(
    public title: string,
    public content: string,
    public loveIts: number,
    public created_at: Date
  ) {
    if (this.created_at === null) {
      this.created_at = new Date();
    }
    console.log('create new Post');
  }

}

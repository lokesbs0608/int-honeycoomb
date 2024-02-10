

interface Comments {
    id: string;
    user_id: string;
    comment: string;
  }
  
  interface SubTask {
    id: string;
    title: string;
    start_date: string;
    end_date: string;
    reporting_to: string;
    assigned_to: string;
    due_date: string;
    duration: string;
    status: string;
    comments: Comments;
    files: any;
  }
  
  interface Task {
    id: string;
    title: string;
    start_date: string;
    end_date: string;
    reporting_to: string;
    assigned_to: string;
    due_date: string;
    duration: string;
    status: string;
    comments: Comments;
    files: any;
    sub_task: SubTask;
  }


  export type {Task}
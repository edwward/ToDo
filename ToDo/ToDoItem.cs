namespace ToDo
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public bool IsSelected { get; set; }
        //public bool IsNotified { get; set; }
        //public bool IsCompleted { get; set; }
        public DateTime? DueDateTime { get; set; } // property for due date/time
        public bool EnableTimer { get; set; }
    }
}

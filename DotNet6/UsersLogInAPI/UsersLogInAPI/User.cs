using System.ComponentModel.DataAnnotations.Schema;

namespace UsersLogInAPI
{
    [Table("test_users")]
    public class User
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; } = string.Empty;
        [Column("password")]
        public string Password { get; set; } = string.Empty;
        [Column("small_description")]
        public string Small_Description { get; set; } = string.Empty;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace dotnetangular.Data.Models
{
    public class User 
    {
        #region  Constructor
        public User(){}
        #endregion
        #region Properties
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Role { get; set; }
        [Required]
        public string Email {get;set;}
        [Required]
        public string Password{get;set;}
        public DateTime CreatedDate { get; set; }
        #endregion
        #region  LLP
        public virtual List<Question> Questions { get; set; }
        #endregion
        
    }
}
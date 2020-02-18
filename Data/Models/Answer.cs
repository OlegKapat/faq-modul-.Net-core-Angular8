using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetangular.Data.Models
{
    public class Answer
    {
        #region  Constructor
        public Answer(){}
        #endregion
        #region  Properties
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id{get;set;}
        [Required]
        public string Text {get;set;}
        [Required]
        public string Author{get;set;}
        public int QuestionId{get;set;}
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedDate{get;set;}
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LastModifiedDate{get;set;}

        #endregion
        #region LLP
         [ForeignKey("QuestionId")]
        public virtual Question Question{get;set;}
        #endregion
    }
}
using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetangular.ViewModel
{
    [JsonObject(MemberSerialization.OptOut)]
    public class AnswerViewModel
    {
        #region Constructor
        public AnswerViewModel(){}
        #endregion
        #region Properties
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id{get;set;}
        [Required]
        public string Author{get;set;}
        [Required]
        public string Text{get;set;}
        public int QuestionId{get;set;}
         [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedDate{get;set;}
         [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LastModifiedDate{get;set;}

        #endregion
    }
}
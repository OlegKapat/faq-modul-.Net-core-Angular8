using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetangular.ViewModel
{
    [JsonObject(MemberSerialization.OptOut)]
    public class QuestionViewModel
    {
        #region Constructor
        public QuestionViewModel(){}
        #endregion
        #region Properties
        [Key]
       //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
       [Required]
        public int Id {get;set;}
        [Required]
        public string Title {get;set;}
        [Required]
        public string Text{get;set;}
        [Required]
        public string Author{get;set;}
        public string Description {get;set;}
        public int? UserId{get;set;}
        // [DataType(DataType.Date)]
        // [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedDate{get;set;}
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LastModifiedDate{get;set;}
        #endregion
    }
}
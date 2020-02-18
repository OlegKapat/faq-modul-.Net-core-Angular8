using System.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using dotnetangular.Data.Models;
using System.Text.Json.Serialization;

namespace dotnetangular.Data
{
    public class Question
    {
       #region Constructor
        public Question(){}
        #endregion
        #region Properties
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id {get;set;}
        [Required]
        public string Title {get;set;}
        [Required]
        public string Text{get;set;}
        public int UserId {get;set;}
        [Required]
        public string Author{get;set;}
        public string Description {get;set;}
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedDate{get;set;}
        
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LastModifiedDate{get;set;}
        #endregion
        #region LLP
        [ForeignKey("UserId")]
        public virtual User User {get;set;}
        public virtual List<Answer> Ansewrs {get;set;}
        #endregion
    }
}
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
    public class UserViewModel
    {
        #region Constructor
        public UserViewModel(){}
        #endregion
        #region Properities
        [Key]
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id {get;set;}
        [Required]
        public string Name{get;set;}
        [Required]
        public string Role {get;set;}
        [Required]
        public string Email{get;set;}
        [Required]
        public string Password{get;set;}
        public DateTime CreatedDate { get; set; }
        #endregion
    }
}
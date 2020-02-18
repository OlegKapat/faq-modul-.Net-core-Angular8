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
    public class AuthViewModel
    {
         #region Constructor
        public AuthViewModel(){}
        #endregion
        #region Properities
        [Required]
        public string Name{get;}
         [Required]
        public string Password{get;}
        #endregion
    }
}
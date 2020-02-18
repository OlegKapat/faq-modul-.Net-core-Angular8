using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetangular.Data.Models
{
    public class Auth
    {
        #region Constructor
        public Auth(){}
        #endregion
        #region Properties
        public string Name{get;set;}
        public string Password{get;set;}
        #endregion
    }
}
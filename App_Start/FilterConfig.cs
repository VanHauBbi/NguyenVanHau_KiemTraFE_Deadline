using System.Web;
using System.Web.Mvc;

namespace NguyenVanHau_KiemTraFE_Deadline
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}

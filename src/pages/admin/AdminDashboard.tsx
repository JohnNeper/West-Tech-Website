import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Newspaper, Users, Handshake, TrendingUp, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState({
    events: 0,
    news: 0,
    team: 0,
    partners: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [eventsRes, newsRes, teamRes, partnersRes] = await Promise.all([
          supabase.from('events').select('id', { count: 'exact', head: true }),
          supabase.from('news').select('id', { count: 'exact', head: true }),
          supabase.from('team_members').select('id', { count: 'exact', head: true }),
          supabase.from('partners').select('id', { count: 'exact', head: true }),
        ]);

        setStats({
          events: eventsRes.count || 0,
          news: newsRes.count || 0,
          team: teamRes.count || 0,
          partners: partnersRes.count || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { 
      icon: Calendar, 
      label: t('admin.events'), 
      value: stats.events, 
      color: 'bg-blue-500',
      link: '/admin/events'
    },
    { 
      icon: Newspaper, 
      label: t('admin.news'), 
      value: stats.news, 
      color: 'bg-green-500',
      link: '/admin/news'
    },
    { 
      icon: Users, 
      label: t('admin.team'), 
      value: stats.team, 
      color: 'bg-purple-500',
      link: '/admin/team'
    },
    { 
      icon: Handshake, 
      label: t('admin.partners'), 
      value: stats.partners, 
      color: 'bg-orange-500',
      link: '/admin/partners'
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('admin.welcomeBack')}</h1>
          <p className="text-gray-500 mt-1">{t('admin.dashboardSubtitle')}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, index) => (
            <Link key={index} to={stat.link}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-1">
                        {loading ? '...' : stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>{t('admin.quickActions')}</CardTitle>
            <CardDescription>{t('admin.quickActionsDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/admin/events" 
                className="p-4 border rounded-lg hover:border-[#ffd630] hover:bg-[#ffd630]/5 transition-colors text-center"
              >
                <Calendar className="h-8 w-8 mx-auto mb-2 text-[#ffd630]" />
                <p className="font-medium">{t('admin.addEvent')}</p>
              </Link>
              <Link 
                to="/admin/news" 
                className="p-4 border rounded-lg hover:border-[#ffd630] hover:bg-[#ffd630]/5 transition-colors text-center"
              >
                <Newspaper className="h-8 w-8 mx-auto mb-2 text-[#ffd630]" />
                <p className="font-medium">{t('admin.addNews')}</p>
              </Link>
              <Link 
                to="/admin/team" 
                className="p-4 border rounded-lg hover:border-[#ffd630] hover:bg-[#ffd630]/5 transition-colors text-center"
              >
                <Users className="h-8 w-8 mx-auto mb-2 text-[#ffd630]" />
                <p className="font-medium">{t('admin.addTeamMember')}</p>
              </Link>
              <Link 
                to="/admin/partners" 
                className="p-4 border rounded-lg hover:border-[#ffd630] hover:bg-[#ffd630]/5 transition-colors text-center"
              >
                <Handshake className="h-8 w-8 mx-auto mb-2 text-[#ffd630]" />
                <p className="font-medium">{t('admin.addPartner')}</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* View site */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#ffd630]/20 rounded-full">
                  <Eye className="h-6 w-6 text-[#ffd630]" />
                </div>
                <div>
                  <h3 className="font-semibold">{t('admin.previewSite')}</h3>
                  <p className="text-sm text-gray-500">{t('admin.previewSiteDesc')}</p>
                </div>
              </div>
              <Link 
                to="/" 
                target="_blank"
                className="px-4 py-2 bg-[#ffd630] text-black rounded-lg font-medium hover:bg-[#ffd630]/90 transition-colors"
              >
                {t('admin.viewSite')}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

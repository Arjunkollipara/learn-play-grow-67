import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { EventsCalendar } from '@/components/EventsCalendar';
import { 
  Home, Bell, User, BookOpen, TrendingUp, Clock, 
  Award, MessageSquare, AlertCircle, CheckCircle2,
  ArrowLeft, Star, Target, Calendar, BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Child's data
const childData = {
  name: 'Alex',
  grade: '3rd Grade',
  avatar: '👦',
  overallProgress: 72,
  streak: 7,
  totalStars: 47,
  rank: 5,
};

const subjects = [
  { name: 'Mathematics', progress: 75, grade: 'A', trend: 'up', color: 'student-blue' },
  { name: 'English', progress: 60, grade: 'B+', trend: 'up', color: 'student-orange' },
  { name: 'Science', progress: 40, grade: 'B', trend: 'down', color: 'student-green' },
  { name: 'Art', progress: 90, grade: 'A+', trend: 'up', color: 'student-pink' },
];

const recentActivities = [
  { id: 1, type: 'quiz', title: 'Completed Math Quiz', score: '8/10', time: '2 hours ago', icon: CheckCircle2 },
  { id: 2, type: 'video', title: 'Watched "Fun with Numbers"', duration: '15 min', time: '5 hours ago', icon: BookOpen },
  { id: 3, type: 'badge', title: 'Earned "Quick Learner" badge', time: 'Yesterday', icon: Award },
  { id: 4, type: 'login', title: 'Started learning session', time: 'Yesterday', icon: Clock },
];

const notifications = [
  { id: 1, type: 'alert', message: 'Math exam scheduled for Dec 20', urgent: true },
  { id: 2, type: 'info', message: 'Science project due next week', urgent: false },
  { id: 3, type: 'success', message: 'Alex completed all daily goals!', urgent: false },
];

const ParentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'calendar' | 'messages'>('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/role-selection')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Roles
              </Button>
            </div>
            
            <h1 className="font-display text-xl font-bold text-foreground">
              Parent Portal
            </h1>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Child Profile Card */}
        <div className="bg-gradient-to-r from-student-purple via-student-blue to-student-cyan rounded-3xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl">
              {childData.avatar}
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="font-display text-2xl md:text-3xl font-bold">
                {childData.name}'s Learning Journey
              </h2>
              <p className="text-white/80 mt-1">{childData.grade} • Student</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-student-yellow text-student-yellow" />
                  <span className="font-bold">{childData.totalStars} Stars</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                  <Target className="w-4 h-4" />
                  <span className="font-bold">Rank #{childData.rank}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-bold">{childData.streak} Day Streak</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-28 h-28 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <div>
                  <div className="text-3xl font-bold">{childData.overallProgress}%</div>
                  <div className="text-xs text-white/80">Overall</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'progress', label: 'Progress', icon: TrendingUp },
            { id: 'calendar', label: 'Calendar', icon: Calendar },
            { id: 'messages', label: 'Messages', icon: MessageSquare },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'outline'}
              className={cn(
                'font-display',
                activeTab === tab.id && 'bg-student-purple hover:bg-student-purple/90'
              )}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Notifications */}
            <section className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-student-orange" />
                Important Updates
              </h3>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={cn(
                      'flex items-start gap-3 p-3 rounded-xl transition-colors',
                      notif.urgent ? 'bg-destructive/10' : 'bg-muted/50'
                    )}
                  >
                    {notif.urgent ? (
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-student-green flex-shrink-0 mt-0.5" />
                    )}
                    <p className={cn(
                      'text-sm',
                      notif.urgent ? 'text-destructive font-medium' : 'text-foreground'
                    )}>
                      {notif.message}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Subject Progress */}
            <section className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-student-blue" />
                Subject Performance
              </h3>
              <div className="space-y-6">
                {subjects.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-semibold">{subject.name}</span>
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          'text-sm font-bold px-2 py-0.5 rounded',
                          `bg-${subject.color}/20 text-${subject.color}`
                        )}>
                          {subject.grade}
                        </span>
                        <TrendingUp className={cn(
                          'w-4 h-4',
                          subject.trend === 'up' ? 'text-student-green' : 'text-destructive rotate-180'
                        )} />
                      </div>
                    </div>
                    <Progress 
                      value={subject.progress} 
                      className="h-3"
                    />
                    <p className="text-xs text-muted-foreground">
                      {subject.progress}% complete
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-student-purple" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-student-blue/10 flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-student-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.score && (
                      <span className="text-sm font-bold text-student-green bg-student-green/10 px-3 py-1 rounded-full">
                        {activity.score}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <EventsCalendar compact />

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Teacher
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
            </div>

            {/* Learning Tips */}
            <div className="bg-gradient-to-br from-student-green/20 to-student-cyan/20 rounded-2xl p-6 border border-student-green/30">
              <h3 className="font-display font-bold text-foreground mb-3">💡 Learning Tip</h3>
              <p className="text-sm text-muted-foreground">
                Alex learns best in the morning! Consider scheduling study time between 9-11 AM for better focus.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;

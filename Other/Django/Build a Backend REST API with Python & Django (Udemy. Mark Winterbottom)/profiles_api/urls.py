from django.urls import path, include

from rest_framework.routers import DefaultRouter

from profiles_api import views


router = DefaultRouter() # Create router.
router.register('hello-viewset', views.HelloViewSet, base_name='hello-viewset') # Register viewset.

# Don't need to specify base name due to queryset obj in UserProfileViewSet class
router.register('profile', views.UserProfileViewSet)

router.register('feed', views.UserProfileFeedViewSet)

urlpatterns = [
    path('hello-view/', views.HelloApiView.as_view()),
    path('login/', views.UserLoginApiView.as_view()), # Enable login endpoint for django rest framework.
    path('', include(router.urls)) # Generates list of urls needed for viewset functions. '' Means no prefix.
]

from django.contrib import admin
from profiles_api import models

# Register user profile model profile with django 
# admin site, making it accessible from admin interface.
admin.site.register(models.UserProfile)
admin.site.register(models.ProfileFeedItem)
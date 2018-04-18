module ApplicationHelper
  def underscorize(string)
    string.downcase.gsub(/[!@#$%^&*()-=_+|;':",.<>?']/, '').gsub(' ', '_')
  end
end
